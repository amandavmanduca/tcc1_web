
<!--- BOX ROUTES --->

# Cria um Box
mutation {
  createOneBox(
    input: {
      box: {
        name: "Eros CrossFit"
        city: "Pelotas/RS"
        logo: "LOGO URL"
      }
    }
  ) {
    id
    name
    city
    logo
  }
}

# Lista todos os Box
{
  boxes {
    edges {
      node {
        id
        name
        city
        logo
      }
    }
  }
}

# Filtra Box pelo Nome
{
  boxes(
    filter: {
        name: {like: "%%"}
    }
  ) {
    edges {
      node {
        id
        name
        city
        logo
        athletes {
          edges {
            node {
              firstname
              
            } 
          }
        }
      }
      
    }
  }
}

# Busca Box pelo ID
{
  box(id: "1") {
    name
  }
}


<!--- ATHLETES ROUTES --->

# Cria um Athlete
mutation{
  createOneAthlete(
    input: {
      athlete: {
        firstname: "Mat"
        lastname: "Fraser"
        birth: "25/06/1991"
        sex: "Masculino"
        cpf: "000.000.000-55"
        email: "fraser@gmail.com"
        
      }
    }
  ) {
    id
    firstname
    lastname
  }
}

# Lista todos os Athletes
{
   athletes {
    edges {
      node {
        firstname
        lastname
        category {
          name
        }
        box {
          name
          logo
        }
      }
    }
  }
}



