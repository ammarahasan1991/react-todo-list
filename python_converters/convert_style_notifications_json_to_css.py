import json

with open('style_notifications.json') as json_file:
	data = json.load(json_file)

string = ""
for key, value in data.items():
    key = key.replace("color-", "")
    string = string + "."+key + "{ color:" + value + ";}"+ " \n"

text_file = open("style_notifications.css", "w")
text_file.write(string)
text_file.close()