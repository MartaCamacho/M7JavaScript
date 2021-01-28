/* EXERCICI 1 */

function splitName() {
  let name = "MARTA";

  for (let i = 0; i < name.length; i++) {
    const substr = name.substring(i, i + 1);
    console.log(substr);
  }
}

splitName();

/* EXERCICI 2 */

function vowelOrNot() {
  let name = "MART4";

  var vowelTest = (function () {
    var re = /^[aeiou]$/i;
    return function (s) {
      return re.test(s);
    };
  })();
  var consonantTest = (function () {
    var re = /^[bcdfghjklmnpqrstvwxys]$/i;
    return function (s) {
      return re.test(s);
    };
  })();
  var numberTest = (function () {
    var re = /^[0-9]$/i;
    return function (s) {
      return re.test(s);
    };
  })();

  for (let i = 0; i < name.length; i++) {
    const substr = name.substring(i, i + 1);
    if (vowelTest(substr) == true) {
      console.log(`He trobat la VOCAL: ${substr}`);
    } else if (consonantTest(substr) == true) {
      console.log(`He trobat la CONSONANT:${substr}`);
    } else if (numberTest(substr) == true) {
      console.log(`Els noms de persones no contenen el número:${substr}`);
    }
  }
}
vowelOrNot();

/* EXERCICI 3 */

function arrMap() {
  let name = "MARTA";
  const dividedName = name.split("");
  const separateLetters = dividedName.map((letter) => letter);

  function countTimesWordApperesInArray(words) {
    let size = words.length;
    for (let i = 0; i < size; i += 1) {
      let count = 0;

      let element = words[i];
      for (let j = 0; j < size; j += 1) {
        if (words[j] == element) {
          count += 1;
        }
      }
      console.log(words[i] + " " + count);
    }
  }

  countTimesWordApperesInArray(separateLetters);
}
arrMap();

/* EXERCICI 4 */

function arrFullName() {
  let name = "MARTA ";
  const lastName = "CAMACHO";

  const dividedName = name.split("");
  const dividedLastName = lastName.split("");

  const fullName = dividedName.concat(dividedLastName);
  console.log(fullName);
}

arrFullName();

/* NIVELL 2 */

let str =
  "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";

function findEmailAddresses() {
  
  var separateEmailsBy = ", ";
  var email = "no emails found";
  var emailsArray = str.match(
    /([a-zA-ZñÑ0-9._-]+@[a-zA-ZñÑ0-9._-]+\.[a-zA-Z0-9._-]+)/gi
  );
  if (emailsArray) {
    email = "";
    for (var i = 0; i < emailsArray.length; i++) {
      if (i != 0) email += separateEmailsBy;
      email += emailsArray[i];
    }
  }
  email = email.replace(/[ ]/g, "").split(",");
  var result = [];
  for (var i = 0; i < email.length; i++) {
    if (result.indexOf(email[i]) == -1) result.push(email[i]);
  }
  result = result.join(", ");
  console.log(result) ;
}
findEmailAddresses()
