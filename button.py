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
                print('Button pressed...')
		from picamera import PiCamera
		from time import sleep
		camera = PiCamera()
		camera.resolution = (960, 721)
		camera.rotation = 270
		camera.start_preview()
		sleep(2)
		camera.capture('/tmp/tweet.jpg')
		camera.stop_preview()
                print('Photo taken...')
		from subprocess import call
                call(["node", "tweet.js"])
		time.sleep(0.2)
         else:
#             GPIO.output(24, False)
	      print('Button not pressed', end='\r')

except:
    GPIO.cleanup()
