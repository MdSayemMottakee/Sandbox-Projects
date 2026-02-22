# Example usage for sending a list of messages
import pyautogui
import time

def send_messages(messages, delay=0.5):
    """
    Function to send a list of messages with a specified delay between each message.
    
    Parameters:
        messages (list): List of messages to send.
        delay (float): Delay (in seconds) between sending each message. Default is 0.5 seconds.
    """
    # Sleep for 3 seconds before starting (optional)
    time.sleep(3)
    
    # Loop through each message and send it
    for message in messages:
        pyautogui.typewrite(message)
        pyautogui.press("enter")
        # Sleep for the specified delay time
        time.sleep(delay)

# Example usage:
if __name__ == "__main__":
    # List of messages (you can customize this)
    messages = [
        "Message 1",
        "Message 2",
        "Message 3",
        # Add more messages as needed
    ]
    
    # Call the function with the list of messages
    send_messages(messages)
