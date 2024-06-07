import {create} from 'zustand';

const useUserStore = create((set) => ({

    initialUserData : null,
    setUserData : (data) => {
        localStorage.setItem('userData', JSON.stringify(data));
        set({initialUserData : data})
    }
}))

export default useUserStore;