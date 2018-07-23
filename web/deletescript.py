import docker

client = docker.Client(base_url='unix://var/run/docker.sock')
containers = client.containers(False, True)

for container in containers:
    client.remove_container(container["Names"][0])
    #print(container["Names"][0])
    #if(container["Names"][0] == "/testjs_web_1"):
     #   client.remove_container(container["Names"][0])
      #  print('container deleted')
#print(containers)

print()

images = client.images()


for image in images:
    client.remove_image(image['Id'])
    #if((image['RepoTags'][0] == 'node:carbon') or (image['RepoTags'][0] == 'testjs_web:latest')):
     #   client.remove_image(image['Id'])
      #  print('image deleted')

#print(images)
