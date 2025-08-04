import requests
import cv2
import numpy as np

url = "http://10.1.89.17:8080/shot.jpg"
while True:
    r = requests.get(url)
    img_array = np.array(bytearray(r.content), dtype=np.uint8)
    img = cv2.imdecode(img_array, -1)
    cv2.imshow("IPWebcam", img)
    if cv2.waitKey(1) & 0xFF == 27:
        break
cv2.destroyAllWindows()