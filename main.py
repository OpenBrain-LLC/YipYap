import requests
import re
import random
import time
import json

def scrape_youtube_fast(query):
    """Scrapes YouTube search results while pretending to be a normal browser."""
    formatted_query = query.replace(' ', '+')
    url = f"https://www.youtube.com/results?search_query={formatted_query}&sp=EgIQAQ%253D%253D"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        raw_ids = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', response.text)
        return list(dict.fromkeys(raw_ids))
        
    except requests.exceptions.RequestException as e:
        print(f"⚠️ Network error fetching {query}: {e}")
        return []

def generate_massive_database(target_count=1000):
    """Generates a large database using common, broad topics."""
    
    topics = [
        "vlog", "travel", "cooking", "baking", "fitness", 
        "workout", "DIY", "tech", "gadgets", "space", 
        "science", "nature", "comedy", "cars", "photography", 
        "art", "history", "music", "sports", "fashion", 
        "beauty", "design", "finance", "podcast", "games", "anime"
    ]

    random.shuffle(topics) # Mix up the search order every time you run it
    all_ids = []
    
    print(f"🚀 Starting Stealth Scraper (Target: {target_count} videos)...")
    
    for topic in topics:
        print(f"🔍 Searching '{topic}'...")
        batch = scrape_youtube_fast(topic)
        all_ids.extend(batch)
        
        # Deduplicate on the fly
        unique_ids = list(dict.fromkeys(all_ids))
        print(f"✅ Found {len(batch)} videos. Total unique so far: {len(unique_ids)}")
        
        if len(unique_ids) >= target_count:
            print("🎯 Target reached!")
            break
            
        # THE ANTI-BAN FIX: Sleep for 1 to 3 seconds before the next request
        sleep_time = random.uniform(1.0, 3.0)
        time.sleep(sleep_time)
        
    # Final shuffle and trim to exact target amount
    random.shuffle(unique_ids)
    final_list = unique_ids[:target_count]
    
    print("-" * 30)
    print(f"✨ Total Unique IDs Collected: {len(final_list)}")
    return final_list

def save_to_js(yt_ids):
    """Saves the array directly to a JavaScript file."""
    filename = "data.js"
    with open(filename, "w") as file:
        file.write(f"const yt_ids = {json.dumps(yt_ids)};\n")
    print(f"💾 Successfully saved exactly {len(yt_ids)} IDs directly to '{filename}'!")

if __name__ == "__main__":
    yt_ids = generate_massive_database(target_count=500)
    save_to_js(yt_ids)