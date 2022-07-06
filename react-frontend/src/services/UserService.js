import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/findAllUsers');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + '/addUser', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/findAllUsers/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/userUpdate/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/deleteUser/' + employeeId);
    }

  
}

export default new EmployeeService()