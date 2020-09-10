/* Stack de seguridad moderno
Antes, las compañías se comunicavan por intranet
Classic securuy is intranet-only (red privada que funciona dentro de las compañías).
SOAP (Simple Object Access Protocol), SAM (Security Account Manager), WSFederation quedaron cortos con la Mobile Revolution.

Stack de seguridad
    1) JSON Web Token (JWT).
    2) Open Authorization 2.0 (OAuth 2.0): Standard para implementar autorización.
    3) OpenID Connect: Capa de autenticación que funciona por encima de OAuth 2.0.

Autenticación: Verificar la identidad de un usuario. Autenticación passwordless (sin contraseña).
Autorización: Conceder permisos de manera limitada a los recursos.

Sesiones
Cuando se accede a un sitio web, se genera una petición HTTP (no tiene estado: Nunca comparten información entre sí,
por lo que para poder hacerlo, se hace mediantre una sesión).
Cuando se visita un sitio web, se crea una sesión (no hace falta estar autenticado).
La sesión almecena información de la navegación. La misma, genera un ID que se almacena en una cookie (archivo que se almacena
en el browser. Se consrva al cerrar el browser con el ID de la sesión).
Cuando hay una autenticación, la sesión se relaciona con el user.
Las sesiones debería expirar por cuestiones de seguridad.
Liberías: Cookie-Session (en la cookie) y Express-Session (en memoria del servidor).
Para escalar, es importante usar bases de datos en memoria como Redis.
JWT no tiene estado, por lo que no necesita memoria.

JSON Web Token
Standard que permite generar demanda entre dos clientes de manera segura.
    1) Header: Tiene dos atributos:
        a) 'alg': 'HS256'. Algoritmo de encriptación de la firma. Pueden ser síncronos (se usa la misma llave) o asíncronos
        (usan dos llaves de encriptación: Una privada (desencriptar) y una pública (encriptar)). Los asíncronos se usan
        en sitios con partes públicas. Los síncronos se deben usar en sistemas cerrados (backend).
        b) 'type': JWT
    2) Payload: Se guarda información del usuario, incluídos los scope de autorización. Se componen de claims, generalmente,
    representada por tres letras para mantener el JWT chico. Hay distintos tipos de claims.
    Registered claims: Claims específicos que ya tienen una definición propiay deben respetarse.
    Public claims: Lista de claims que pueden usarse entre distintas apps y ya están definidos.
    Private claims: Los que se definen para la app.
        a) 'sub': '1234567890',
        b) 'name' John Doe',
        c) 'iat': 1516239022
    3) Signature:
        HMACSHA256(
            base64URLEncode(header) + '.' + base64URLEncode(payload)
            your-256-bit-secret
        ) HMACSHA256: Se tiene que usar un string de 256 bits de longitud.

Autenticación tradicional: Cuando hay un proceso de autenticación, se crea una sesión. El ID de la sesión, se almanena en una
cookie que se guarda en el browser. Viaja en las request para verificar la sesión previamente activa.
Desventajas
Las SPA no hacen refresh todas las veces, por lo que no saben si hubo cambios en la sesión.
Por definición, las REST API no deverían tener estado (stateless). Con las sesiones se generan estado.
En arquitecturas modernas (como microservicios), la sesión en una máquina no fluye a los otros clientes, por lo que es
difícil de escalar.
El control de acceso requiere que siempre se vaya a base de datos.
Controlar el manejo de memoria es un problema, ya que cada cliente que se conecta, genera una sesión y más consumo de memoria.

Autenticación con JWT: Con la autenticación se firma un token, y a partir de ahí, es enviado al cliente, y este lo almacena en
memoria o en una cookie. Todos los request llevan éste token.
Ventanas
Las SPA ya no requieren den backend para saber si un user está autenticado.
El backend puede recibir múltuples request, de múltiples clientes, y lo único que importa, es si el token está bien
firmado.
Es el cliente el que sabe qué permisos tiene, y no tiene que ir hasta base de datos para verificarlos.

Firmar un JWT: Se usa Node JWT.
    jwt.sign({ sub: user.id } (payload),'secret', options);

Verificar
    jwt.verify(token, 'secret', function(err, decoded) {} (decoded token. Se puede obviar));

Server-side Session
La sesión en el lado del servidor suele ser una pieza de información que se guarda en memoria o en una base de datos y
esta permite hacerle seguimiento a la información de autenticación, con el fin de identificar al usuario y determinar
cuál es el estado de autenticación. Mantener la sesión de esta manera en el lado del servidor es lo que se considera
'stateful', es decir que maneja un estado.

Client-side session
Las SPA (Single-Page Apps) requieren una manera de saber si el usuario esta autenticado o no.
Pero esto no se puede hacer de una manera tradicional porque suelen ser muy desacopladas con el backend y no
suelen refrescar la página como lo hacen las aplicaciones renderizadas en el servidor.
JWT (JSON Web Token) es un mecanismo de autenticación sin estado, lo que conocemos como 'stateless'.
Lo que significa que no hay una sesión que exista del lado del servidor.
La manera como se comporta la sesión del lado del cliente es:
    1) Cuando el usuario hace 'login' agregamos una bandera para indicar que lo esta.
    2) En cualquier punto de la aplicación verificamos la expiración del token.
    3) Si el token expira, cambiamos la bandera para indicar que el usuario no está logueado.
    4) Se suele chequear cuando la ruta cambia.
    5) Si el token expiró lo redireccionamos a la ruta de 'login' y actualizamos el estado como 'logout'.
    6) Se actualiza la UI para mostrar que el usuario ha cerrado la sesión.

Buenas prácticas con JWT
    1) Evitar información sensible: Debido a que los JWT son decodificables, es posible visualizar
    la información del payload, por lo que ningún tipo de información sensible debe ser expuesto como contraseñas,
    keys, etc. Tampoco debería agregarse información confidencial del usuario, como su numero de identificación o
    información medica, ya que como hablamos anteriormente, los hackers pueden usar esta información para hacer
    ingeniería social.
    2) Mantener el peso lo más liviano posible: Suele tenerse la tentación de guardar toda la información del perfil
    en el payload del JWT, pero esto no debería hacerse ya que necesitamos que el JWT sea lo más pequeño posible debido
    a que al enviarse con todos los request estamos consumiendo parte del ancho de banda.
    3) Establecer un tiempo de expiración corto: Debido a que los tokens pueden ser robados, si no se toman las medidas
    correctas de almacenamiento seguro, es muy importante que estos tengan unas expiración corta, el tiempo recomendado
    es desde 15 minutos hasta un maximo de 2 horas.
    4) Tratar los JWT como tokens de opacos: Aunque los tokens se pueden decodificar,
    deben tratarse como tokens opacos, es decir, como si no tuviesen ningún valor legible.
    Esto es porque desde el lado del cliente no tenemos manera de verificar si la firma es correcta,
    así que si confíamos en la información decodificada del token, alguien podría introducir un token invalido
    con otra información a propósito. Lo mejor, es siempre enviar el token del lado del servidor y hacer las verificaciones
    allí.
    5) ¿Dónde guardar los tokens?: Cuando estamos trabajando con SPA (Single Page apps) debemos evitar almacenar
    los tokens en Local Storage o Session Storage. Estos deben ser almacenados en memoria o en una cookie,
    pero sólo de manera segura y con el flag httpOnly, esto quiere decir que la cookie debe venir del lado del
    servidor con el token almacenado.
    6) Silent Authenticacion vs Refresh Tokens: Debido a que es riesgoso almacenar tokens del lado del cliente,
    no se deberían usar Refresh Tokens cuando se trabaja solo con una SPA. Lo que se debe implementar es Silent Authentication,
    para ello se debe seguir el siguiente flujo:
        1) La SPA obtiene un access token al hacer login o mediante cualquier flujo de OAuth.
        2) Cuando el token expira el API retornara un error 401.
        3) En este momento se debe detectar el error y hacer un request para obtener de nuevo un access token.
        4) Si nuestro backend server tiene una sesión valida (Se puede usar una cookie) entonces respondemos con
        un nuevo access token.
    Hay que tener en cuenta que para implementar Silent authentication y Refresh tokens, se require tener un tipo de sesión
    valida del lado del servidor por lo que en una SPA es posible que sea necesario una especie de backend-proxy, ya que la
    sesión no debería convivir en el lado del API server.
    En el paso 2, si se esta usando alguna librería para manejo de estado como redux, se puede implementar un middleware
    que detecte este error y proceda con el paso 3.

Cookie: Archivo creado por un sitio web con oartes de datos almacenados en él. Su propósito principal,
es reconocer al user mediante el almacenamiento de su historial.
Cookie Session tiene un corto tiempo de vida, ya que se eliminan cuando se cierra el tab o el browser.
Persistent cookies se usan rastrear al user guardando información de su interes.
Secure cookies almacenan datos de manera de cifrada para evitar el robo de datos. Se usan en conexiones HTTPS.

Leyes sobre cookies
    1) Siempre hay que avisar al user.
    2) Es necesario el consentimiento del user.
    3) Si son necesarias para autenticación de user o seguridad, las dos primeras no aplican.

Local Storage (localStorage - setItem)
    1) A diferencia de las cookies, tiene un almacenamiento de 5MB.
    2) La información no viaja con cada request que se le haga al servidor. Ayuda a reducir la
    información entre cliente y servidor.
    3) Persiste aunque se cierre la ventana del browser.

Session Storage (sessionStorage - setItem)
    1) Muy similar al Local Storage, sólo que la información persiste por tab o browser. Es decir,
    al cerrar, la información es eliminada. Está disponible por scope (tab/browser).

Cookies
    1) Tienen un almacenamiento de 4kB.
    2) Se les puede determinar un tiempo de expiración. En Local/Session Storage, hay que hacerlo
    programáticamente con JS.
    3) Una de las desventajas, es que por cada petición que se le haga al servidor, las
    cookies van adjuntas. Ocasiona un gran consumo de datos.
    4) Se pueden hacer seguras con un flag http-only: Permite que la información sea leía y modificada en el servidor.

1) Si la información no es sensible, se puede almacenar en Local/Session Storage.
2) Si es medianamente sensible (identidad de usuario), se puede almacenar en el Session Storage.
3) Si es muy sensible (contraseñas/JWT), almancenar en una cookie con el http-only.

API Token es distinto al Access Token. Permite definir los permisos que van a tener los clientes.
Admin Client: API Token concede permisos administrativos: Leer, Actualizar, Crear y Eliminar.
Render Server: Va a usar permisos públicos read only.
Con esta estrategia, se crea un Access Token, que va a tener un JWT con la información del user y los permisos.
Es importante que la SPA tenga un render server. Si no lo tiene, tiene que haber un server que haga de proxy entre
la SPA y el API Server. */