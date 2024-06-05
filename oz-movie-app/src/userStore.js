import {create} from 'zustand';

const useUserStore = create((set) => ({

    userData : null,
    setUserData : (data) => {
        localStorage.setItem('userData', JSON.stringify(data));
        set({userData : data})
    }

}))

export default useUserStore;