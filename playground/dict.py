from operator import length_hint


mylist = {
    "name": ["Nishtha","Arya"],
    "Age": "14",
    "class": "9"
}
print(mylist)
print(mylist["name"])
print(mylist.keys())
print(mylist.values())
print(len(mylist))


#For loop
list=["nishtha","arya","akshat","car"]
print(list)
for i in list: print(i)


list.extend(["AKshat","NIshtha","WHTsAPP"])
for i in list: print(i)


list.append("vibha".split())
for i in list: print(i)
