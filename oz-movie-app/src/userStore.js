import {create} from 'zustand';

const useUserStore = create((set) => ({
    initialUserData: JSON.parse(localStorage.getItem('userData')),
    setUserData: (data) => {
        localStorage.setItem('userData', JSON.stringify(data));
        set({ initialUserData: data });
    },
    clearUserData: () => {
        localStorage.removeItem('userData');
        set({ initialUserData: null });
    },
}));
export default useUserStore;