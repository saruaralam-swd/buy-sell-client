import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useAdmin from "../../../hooks/UseAdmin";
import useSeller from "../../../hooks/UseSeller";
import useBuyer from "../../../hooks/UseBuyer";
import Loader from "../../../Components/Loader";
import ProfileEditModal from "../../DashBoard/ProfileEditModal/ProfileEditModal";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const [openModal, setOpenModal] = useState(false);

  if (isAdminLoading || isSellerLoading || isBuyerLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="">
        <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">
          My Profile
        </h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="mr-10 flex flex-col justify-center px-20 mx-auto md:mx-0">
            <img
              className="mb-1 h-32 w-32 mx-auto rounded-full shadow-lg"
              src={
                user?.photoURL ||
                "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              }
              alt=""
            />

            {isAdmin && <p className="text-center mt-2"> Admin</p>}
            {isSeller && <p className="text-center mt-2"> Seller</p>}
            {isBuyer && <p className="text-center mt-2"> Buyer</p>}

            <label
              onClick={() => setOpenModal(true)}
              htmlFor="profile-Edit-Modal"
              className="bg-[#9acd5e] hover:bg-[#80b248] py-1 px-2 mt-2 text-center duration-300 rounded-md"
            >
              Edit Profile
            </label>
            {openModal && <ProfileEditModal setOpenModal={setOpenModal} />}
          </div>
          <div>
            <div className="mb-5">
              <p className="font-semibold">
                <small>Name</small>
              </p>
              <p>{user?.displayName}</p>
            </div>
            <div className="mb-5">
              <p className="font-semibold">
                <small>Email</small>
              </p>
              <p>{user?.email}</p>
            </div>
            {isAdmin && (
              <div className="mb-5">
                <p className="font-semibold">
                  <small>Contact No.</small>
                </p>
                <p>01870130414</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
