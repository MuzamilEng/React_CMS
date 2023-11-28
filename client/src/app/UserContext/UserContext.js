import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [content, setContent] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const fetchTemplates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/templates');
      const updatedTemplates = response?.data || [];
      setTemplates(updatedTemplates);
      console.log(updatedTemplates, 'updated templates-------------------------1');
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchTemplates();
  }, [fetchTrigger]);
 


  return (
    <UserContext.Provider value={{ content, setContent, templates, setTemplates, setFetchTrigger }}>
      {children}
    </UserContext.Provider>
  );
};
