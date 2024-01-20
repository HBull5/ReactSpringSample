import axios from 'axios';

class Service {

  Service() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  }

  getEmployees() {
    return axios({
      method: 'get',
      url: 'http://localhost:8080/employees'
    });
  }

  getEmployeeByName(id) {
    return axios({
      method: 'get',
      url: `http://localhost:8080/employees/${id}`
    });
  }

}

export default Service;