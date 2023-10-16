import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../Global/userList';

export function useUserData() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    axios.get('http://192.168.1.77:1337/api/users?populate=image')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return userData;
}
