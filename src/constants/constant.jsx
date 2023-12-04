export const BASE_URL = '../../public/projects.json'

export const API_URL = {
  PROJECTS: {
    url:`${BASE_URL}` ,
    config:{
      method: 'GET',
      headers:{
        'Content-type': 'application/json',
      },
    }
  }
}