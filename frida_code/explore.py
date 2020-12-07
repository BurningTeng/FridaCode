import sys
import frida

session = frida.attach('hello')
with open('./explore.js', 'r') as f:
    source = f.read()
script = session.create_script(source)
script.load()

sys.stdin.read()