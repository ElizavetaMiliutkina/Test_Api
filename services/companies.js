import { toRaw } from 'vue';
import axios from 'axios';

const API_BASE_URL = 'http://api-test.duotek.ru';

export const fetchCompanies = async (payload) => {
    try {
        const paramsData = toRaw(payload);
        const response = await axios.get(`${API_BASE_URL}/companies`, {
            params: paramsData
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error);
        throw error;
    }
};

export const fetchCompany = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/companies/info`, {
            params: { id }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching company:', error);
        throw error;
    }
};

export const fetchDefinitions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/definitions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error);
        throw error;
    }
};
