# Example usage for sending a single message multiple times
import pyautogui
import time

def send_message(message, times, delay=0.5):
    """
    Function to send a message multiple times with a specified delay between each message.
    
    Parameters:
        message (str): The message to send.
        times (int): Number of times to send the message.
        delay (float): Delay (in seconds) between sending each message. Default is 0.5 seconds.
    """
    # Sleep for 3 seconds before starting (optional)
    time.sleep(3)
    
    # Counter for the number of messages sent
    sent_count = 0
    
    # Loop until the desired number of times is reached
    while sent_count < times:
        pyautogui.typewrite(message)
        pyautogui.press("enter")
        # Sleep for the specified delay time
        time.sleep(delay)
        sent_count += 1

# Example usage:
if __name__ == "__main__":
    # Message to send
    message = "Hello, World!"
    
    # Number of times to send the message
    times = 100
    
    # Call the function to send the message multiple times
    send_message(message, times)
