from twilio.rest import Client

# Your Account SID and Auth Token from twilio.com/console
account_sid = 'your_account_sid'
auth_token = 'your_auth_token'

client = Client(account_sid, auth_token)

# Send a WhatsApp message
message= client.messages.create(
    body='Hello from Python via WhatsApp!',
    from_='whatsapp:+14155238886',  # Twilio Sandbox WhatsApp Number
    to='whatsapp:+918610504177'  # Your WhatsApp Number
)

print(f"Message sent with SID: {message.sid}")
