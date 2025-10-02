import axios from "axios";
import { create } from "zustand";
let api = 'http://localhost:5000/'

export const useGetStore = create((set, get) => ({
    users: [],
    fullUsers: [],
    getJobs: [],
    getUsers: async () => {
        try {
            let { data } = await axios.get(`${api}registration`)
            set({ users: data })
        } catch (error) {
            console.error(error)
        }
    },
    registration: async (data) => {
        try {
            await axios.post(`${api}registration`, data)
            await get().getUsers()
        } catch (error) {
            console.error(error)
        }
    },
    login: async (data) => {
        try {
            await axios.post(`${api}registration`, data)
            await get().getUsers()
        } catch (error) {
            console.error(error)
        }
    },
    getData: async () => {
        try {
            let { data } = await axios.get(`${api}data`)
            set({ fullUsers: data })
        } catch (error) {
            console.error(error);
        }
    },
    fullRegistration: async (data) => {
        try {
            await axios.post(`${api}data`, data)
            await get().getData()
        } catch (error) {
            console.error(error);
        }
    },
    getJobsUsers: async () => {
        let { data } = await axios.get(`${api}getJobs`)
        set({ getJobs: data })
    },
    postJobs: async (data) => {
        await axios.post(`${api}getJobs`, data)
        await get().getJobsUsers()
    },
    editUsers: async (idx, data) => {
        await axios.put(`${api}registration/${idx}`, data)
        await get().getUsers()
    }
}))