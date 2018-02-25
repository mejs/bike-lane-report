from __future__ import print_function

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

GPIO.setup(19, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
#GPIO.setup(24, GPIO.OUT)  #LED to GPIO24

try:
    while True:
         button_state = GPIO.input(19)
         if button_state == False:
#             GPIO.output(24, True)
		from subprocess import call
                call(["python", "camera.py"])
                call(["nodejs", "gps.js"])
		call(["nodejs", "tweet.js"])
#             print('Button Pressed...')
		time.sleep(0.2)
         else:
#             GPIO.output(24, False)
             print('Button not pressed', end='\r')

except:
    GPIO.cleanup()
