# Proyecto-Empresa

Para que funcione correctamente tienes que:
- Hacer un **git-clone** a la rama "**main**".
- Luego usar "**npm i**" para instalar el **node_modules**
- Y para finalizar y que se ejecute nuestra página, usamos "**npm start**"

Al iniciar la página nos saldrá lo siguiente:

## Registro de usuario
![image](https://user-images.githubusercontent.com/56442515/121731282-06815380-caf1-11eb-87d7-897bb06b3a73.png)

## Inicio de sesión
![image](https://user-images.githubusercontent.com/56442515/121731328-139e4280-caf1-11eb-876b-878e7375a499.png)

## Página principal

![image](https://user-images.githubusercontent.com/56442515/121731163-ddf95980-caf0-11eb-95b5-fb2dd0c8ad3b.png)


## Documentación YAML
---
info:
  _postman_id: 9ffb819c-5e8a-48e5-8a11-34e98c9e83ea
  name: pruebasNerakk
  schema: https://schema.getpostman.com/json/collection/v2.1.0/collection.json
item:
- name: añadir a favoritos
  request:
    method: GET
    header: []
    url:
      raw: https://proyecto-empresa-nerakk.herokuapp.com/
      protocol: https
      host:
      - proyecto-empresa-nerakk
      - herokuapp
      - com
      path:
      - ''
  response: []
- name: añadir cuenta correos
  request:
    method: PUT
    header: []
    url:
      raw: https://console.firebase.google.com/u/0/project/proyectomusica-melen/authentication/users?hl=es
      protocol: https
      host:
      - console
      - firebase
      - google
      - com
      path:
      - u
      - '0'
      - project
      - proyectomusica-melen
      - authentication
      - users
      query:
      - key: hl
        value: es
  response: []
- name: recoger cuentas correos
  request:
    method: GET
    header: []
    url:
      raw: https://console.firebase.google.com/u/0/project/proyectomusica-melen/authentication/users?hl=es
      protocol: https
      host:
      - console
      - firebase
      - google
      - com
      path:
      - u
      - '0'
      - project
      - proyectomusica-melen
      - authentication
      - users
      query:
      - key: hl
        value: es
  response: []
- name: borrar cuenta correos
  request:
    method: DELETE
    header: []
    url:
      raw: https://console.firebase.google.com/u/0/project/proyectomusica-melen/authentication/users?hl=es
      protocol: https
      host:
      - console
      - firebase
      - google
      - com
      path:
      - u
      - '0'
      - project
      - proyectomusica-melen
      - authentication
      - users
      query:
      - key: hl
        value: es
  response: []
  
  ## Documentación Postman
  {
	"info": {
		"_postman_id": "9ffb819c-5e8a-48e5-8a11-34e98c9e83ea",
		"name": "pruebasNerakk",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "añadir a favoritos",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://proyecto-empresa-nerakk.herokuapp.com/",
					"protocol": "https",
					"host": [
						"proyecto-empresa-nerakk",
						"herokuapp",
						"com"
					],
					"path": [
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "añadir cuenta correos",
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "https://console.firebase.google.com/u/0/project/proyectomusica-melen/authentication/users?hl=es",
					"protocol": "https",
					"host": [
						"console",
						"firebase",
						"google",
						"com"
					],
					"path": [
						"u",
						"0",
						"project",
						"proyectomusica-melen",
						"authentication",
						"users"
					],
					"query": [
						{
							"key": "hl",
							"value": "es"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "recoger cuentas correos",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://console.firebase.google.com/u/0/project/proyectomusica-melen/authentication/users?hl=es",
					"protocol": "https",
					"host": [
						"console",
						"firebase",
						"google",
						"com"
					],
					"path": [
						"u",
						"0",
						"project",
						"proyectomusica-melen",
						"authentication",
						"users"
					],
					"query": [
						{
							"key": "hl",
							"value": "es"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "borrar cuenta correos",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "https://console.firebase.google.com/u/0/project/proyectomusica-melen/authentication/users?hl=es",
					"protocol": "https",
					"host": [
						"console",
						"firebase",
						"google",
						"com"
					],
					"path": [
						"u",
						"0",
						"project",
						"proyectomusica-melen",
						"authentication",
						"users"
					],
					"query": [
						{
							"key": "hl",
							"value": "es"
						}
					]
				}
			},
			"response": []
		}
	]
}
