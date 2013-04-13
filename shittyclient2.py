import socket, json
import random, sys
USERNAME = "cupe"
PASSWORD = "fasel"

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('192.168.1.142', 6000))
io = s.makefile('rw')

def write(data):
    io.write('%s\n' % (data,))
    io.flush()
    print "SENDING ", data

write('login %s %s' % (USERNAME, PASSWORD))
while 1:
    data = io.readline()
    if data[0] == "{":
        state = json.loads(data)
        status = state["status"]
        own_id = state["player_id"]
        if status:
            print "################", own_id, " ", status, "#############"
            sys.exit()
        print data
       
        
           # if player["draw"] and player["id"] == own_id:
           #     print "wtf, draw?!"
        if random.randrange(0,100) < 30:
           
            homeplanet = None
            enemy = None
            for planet in state["planets"]:
                if planet["owner_id"] == own_id:
                    if not homeplanet or random.randrange(0,100) < 30:
                        homeplanet = planet["id"]
                if not planet["owner_id"] == own_id:# and not planet["owner_id"] == 0:
                    if not enemy or random.randrange(0,100) < 30:
                        enemy = planet["id"]
            if enemy is not None and homeplanet is not None:
                write("send %s %s %s %s %s" % (homeplanet, enemy, 1000, 1000, 1000))
            else:
                print "no targets found"
                write("nop")
        else:
            write("nop")
            
            
