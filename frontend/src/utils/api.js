import axios from "axios";

// LOG IN TO USER ACCOUNT //
export async function logInToAccount(formData) {
    const { data } = await axios.post("users/login", formData)
    return data
};

// CREATE CHAPTER //
export async function createChapter(formState) {
    const config = {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }
    const { data } = await axios.post("chapters", formState, config)
    return data
};

// EDIT CHAPTER GET DATA //
export async function editChapter(id) {
    const editChapterData = await axios.get(`chapters/${id}`)
    return editChapterData.data
};

// SHOW CHAPTER //

// GET ALL CHAPTERS //
export async function getIndexRoute() {
    const { data } = await axios.get("chapters")
    return data
};

// UPDATE CHAPTER //
export async function updateChapter(formState) {
    const {_id} = formState;
    const updatedData = await axios.put(`chapters/${_id}`, formState)
    return updatedData.data
};

// DELETE CHAPTER //
export async function deleteChapter(id) {
    const deleteData = await axios.delete(`chapters/${id}`)
    return console.log("Chapter Deleted")
};

// EMAIL SUBMIT //
// export async function emailSubmit(formState) {
//     const { data } = await axios.post("/send-email", { name, email, message })
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// };