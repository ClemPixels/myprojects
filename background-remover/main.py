from rembg import remove
from PIL import Image 
import easygui

print("Please wait...")
input_path = easygui.fileopenbox("Select your Image")
output_path = easygui.filesavebox("Where you want to save your Image")

my_img = Image.open(input_path)
print("Please wait...")
rem = remove(my_img)

save = rem.save(output_path)
print("Successfully Done, check your folder")