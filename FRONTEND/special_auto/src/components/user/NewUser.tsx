import axios from "axios";
import { IUser } from "../../typings/user";
import { useState } from "react";
const NewUser = () => {
  // STATE
  const [userData, setUserData] = useState<IUser>({
    first_name: "",
    last_name: "",
    n_cin: "",
    delivery: "",
    start_point: "",
    ending_point: "",
  });

  //FUNCTION CHANGE VALUE FORM
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //Save data user
  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // URL DE BACKEND
      const URL_DU_BACKEND = "http://localhost:4000/api_special_auto";

      const responseUser = await axios.post(
        `${URL_DU_BACKEND}/user/new`,
        userData
      );
      if (responseUser.statusText === "OK") {
        const user = await responseUser.data;
        console.log("user is insertt succesfully", user);
        setUserData({
          first_name: "",
          last_name: "",
          n_cin: "",
          delivery: "",
          start_point: "",
          ending_point: "",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  return (
    <div>
      <div className="title_">
        {" "}
        <h1> Creation utilisateur</h1>
      </div>
      <div className="form_user">
        <form onSubmit={handleSaveUser}>
          <div className="field_">
            <label htmlFor="first_name"> Nom : </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="field_">
            <label htmlFor="last_name"> Prenom : </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={userData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="field_">
            <label htmlFor="n_cin"> Numero CIN : </label>
            <input
              type="text"
              name="n_cin"
              id="n_cin"
              value={userData.n_cin}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="field_">
            <label htmlFor="delivery"> Delivrée à : </label>
            <input
              type="text"
              name="delivery"
              id="delivery"
              value={userData.delivery}
              onChange={handleChange}
            />
          </div>
          <div className="field_">
            <label htmlFor="start_point"> Lieu de depart: </label>
            <input
              type="text"
              name="start_point"
              id="start_point"
              value={userData.start_point}
              onChange={handleChange}
            />
          </div>
          <div className="field_">
            <label htmlFor="ending_point"> Lieu d'arrivéé : </label>
            <input
              type="text"
              name="ending_point"
              id="ending_point"
              value={userData.ending_point}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
