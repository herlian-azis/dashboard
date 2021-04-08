import APIAccess from "../../helpers/APIAccess"


export const getUmkmTerdaftar = (start, finish) => {
    console.log(start, finish)
    return async dispatch => {
        const data = {
            url: "/service/sysBack/statistik/jumlahuser",
            method: "POST",
            body: {
                "tanggalawal": start,
                "tanggalakhir": finish
            }
        }
        try {
            console.log(data)
            const response = await APIAccess(data)
            console.log(response, 'cekkk')
            dispatch({
                type: "UMKM_TERDAFTAR",
                payload: response
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const getUmkmAktifMendaftar = (time) => {
    return async dispatch => {
        const data = {
            url: "/service/sysBack/admin/login",
            method: "POST",
            body: time
        }
        try {
            const response = await APIAccess(data)
        } catch (error) {
            console.log(error)
        }
    }
}
export const getUmkmTidakAktif = (time) => {
    return async dispatch => {
        const data = {
            url: "/service/sysBack/admin/login",
            method: "POST",
            body: time
        }
        try {
            const response = await APIAccess(data)
        } catch (error) {
            console.log(error)
        }
    }
}
export const TotalAsetUmkm = (time) => {
    return async dispatch => {
        const data = {
            url: "/service/sysBack/admin/login",
            method: "POST",
            body: time
        }
        try {
            const response = await APIAccess(data)
        } catch (error) {
            console.log(error)
        }
    }
}
export const getUmkmKondisiProfit = (time) => {
    return async dispatch => {
        const data = {
            url: "/service/sysBack/admin/login",
            method: "POST",
            body: time
        }
        try {
            const response = await APIAccess(data)
        } catch (error) {
            console.log(error)
        }
    }
}
export const getUmkmKondisiRugi = (time) => {
    return async dispatch => {
        const data = {
            url: "/service/sysBack/admin/login",
            method: "POST",
            body: time
        }
        try {
            const response = await APIAccess(data)
        } catch (error) {
            console.log(error)
        }
    }
}
export const getTotalJumlahTransaksi = (time) => {
    return async dispatch => {
        const data = {
            url: "/service/sysBack/admin/login",
            method: "POST",
            body: time
        }
        try {
            const response = await APIAccess(data)
        } catch (error) {
            console.log(error)
        }
    }
}
export const getTotalJumlahPemasukan = (time) => {
    return async dispatch => {
        const data = {
            url: "/service/sysBack/admin/login",
            method: "POST",
            body: time
        }
        try {
            const response = await APIAccess(data)
        } catch (error) {
            console.log(error)
        }
    }
}
export const getTotaljumlahPengeluaran = (time) => {
    return async dispatch => {
        const data = {
            url: "/service/sysBack/admin/login",
            method: "POST",
            body: time
        }
        try {
            const response = await APIAccess(data)
        } catch (error) {
            console.log(error)
        }
    }
}
