import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# Set seed for reproducibility
np.random.seed(42)

# Define number of synthetic records
num_records = 5000

# Generate random latitudes and longitudes across India
latitudes = np.random.uniform(8.0, 37.0, num_records)  # From Kerala to Kashmir
longitudes = np.random.uniform(68.0, 97.0, num_records)  # From Gujarat to Arunachal

# Generate dates within a 30-day period
start_date = datetime(2025, 6, 1)
dates = [start_date + timedelta(days=random.randint(0, 29)) for _ in range(num_records)]

# Generate synthetic weather and environment features
temperatures = np.random.normal(loc=32, scale=5, size=num_records).round(1)  # °C
humidity = np.random.uniform(20, 90, num_records).round(1)  # %
aod = np.random.uniform(0.1, 1.0, num_records).round(3)  # AOD values from MODIS
fires_nearby = np.random.poisson(lam=2, size=num_records)  # FIRMS fire events

# Simulate PM2.5 and CO based on AOD and temperature (loosely correlated)
pm25 = (aod * 100) + np.random.normal(0, 10, num_records) + (temperatures - 30) * 1.5
pm25 = np.clip(pm25, 10, 400).round(1)

co = (aod * 20) + np.random.normal(0, 2, num_records) + fires_nearby * 0.5
co = np.clip(co, 0.5, 50).round(2)

# Compute a synthetic AQI (simplified based on PM2.5 only)
def compute_aqi_pm25(value):
    if value <= 50:
        return 50
    elif value <= 100:
        return 100
    elif value <= 200:
        return 200
    elif value <= 300:
        return 300
    else:
        return 400

aqi = [compute_aqi_pm25(val) for val in pm25]

# Assemble dataset
df = pd.DataFrame({
    'AOD': aod,
    'AQI': aqi,
    'CO': co,
    'Latitude': latitudes.round(16),
    'Longitude': longitudes.round(16),
    'PM25': pm25,
    'humidity': humidity,
    'temperature': temperatures,
})

dataset_path = "AQI_NASA.csv"
df.to_csv(dataset_path, index=False)
dataset_path
