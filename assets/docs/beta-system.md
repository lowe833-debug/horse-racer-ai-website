# Beta Signup System

## Features
1. Simple form collecting:
   - Email (required)
   - Name (optional)
   - Device type (required)
   - Experience level
   - Agreement to test/provide feedback
   - Marketing consent

2. Data Storage
   Currently stores submissions in localStorage. To implement server storage:

```python
# Example Flask backend (api/beta-signup.py)
from flask import Flask, request, jsonify
import csv
from datetime import datetime
import os

app = Flask(__name__)

@app.route('/api/beta-signup', methods=['POST'])
def beta_signup():
    data = request.json
    timestamp = datetime.now().isoformat()
    
    # Save to CSV
    csv_file = 'beta-signups.csv'
    is_new_file = not os.path.exists(csv_file)
    
    with open(csv_file, 'a', newline='') as f:
        writer = csv.writer(f)
        if is_new_file:
            writer.writerow(['Timestamp', 'Email', 'Name', 'Device', 
                           'Experience', 'AgreeTesting', 'AgreeUpdates'])
        writer.writerow([
            timestamp,
            data['email'],
            data['name'],
            data['device'],
            data['experience'],
            data['agreeTesting'],
            data.get('agreeUpdates', False)
        ])
    
    # TODO: Add TestFlight invitation logic here
    # Uses App Store Connect API to send invites
    
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
```

3. TestFlight Integration
To add automated TestFlight invites:

1. Get App Store Connect API Key from:
   https://appstoreconnect.apple.com/access/api

2. Add to backend:
```python
from appstoreconnect import Api
# Initialize with your API key
api = Api('YOUR_KEY_ID', 'YOUR_KEY_FILEPATH')

# Send invite
def send_testflight_invite(email):
    try:
        # Replace with your app ID
        app_id = 'YOUR_APP_ID'
        api.create_beta_tester(
            email=email,
            first_name='',  # Optional
            last_name='',   # Optional
            app_id=app_id
        )
        return True
    except Exception as e:
        print(f"Error sending TestFlight invite: {e}")
        return False
```

## Usage Notes
1. Update form action URL to your API endpoint
2. Add proper error handling
3. Implement email verification
4. Add rate limiting
5. Consider adding reCAPTCHA