import json

with open('colors.json') as json_file:
	data = json.load(json_file)

string = ""
for key, value in data.items():
    for key2, value2 in value.items():
        string = string +  "\n."
        string = string + key.replace(" ","").lower() + "-"
        string = string + key2
        string = string + " {" + "color :"+ value2 + ";"
        string = string + "} "

text_file = open("style_colors.css", "w")
text_file.write(string)
text_file.close()