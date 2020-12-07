import lief

libnative = lief.parse("/usr/bin/ls")
# libnative.add_library("libfrida-gadget.so") # Injection!
for section in libnative.sections:
  print(section.name) # section's name
  print(section.size) # section's size
  print(len(section.content)) # Should match the previous print