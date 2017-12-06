from picamera import PiCamera
from time import sleep

camera = PiCamera()
camera.resolution = (3280, 2464)
camera.rotation = 270

camera.start_preview()
sleep(2)
camera.capture('/tmp/tweet.jpg')
camera.stop_preview()

