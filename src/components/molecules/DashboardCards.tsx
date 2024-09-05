"use client";
import { Card } from "@components/atoms/Card";
import { Button } from "@components/atoms/common/Button";
import { Typography } from "@components/atoms/common/Typography";
import { UseDashboard } from "app/dashboard/dashboard.hook";
import Image from "next/image";

export const CardsDashboard = () => {
  const { loading, fetchUsers, users } = UseDashboard();

  return (
    <>
      {loading ? (
        <Typography variant="h5">Carregando...</Typography>
      ) : (
        <>
          <Button
            onClick={fetchUsers}
            text="Randomizar Usuários"
            className="mb-10 w-fit bg-viveo-primary-200 max-md:w-full"
          />
          <div className="flex h-full justify-center w-full items-center">
            <div className="grid grid-cols-3 mb-10 w-full grid-rows-2 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex items-stretch w-full gap-6 max-lg:gap-4"
                >
                  <Card className="rounded-3xl w-full shadow-md hover:shadow-lg cursor-pointer hover:bg-gray-50 transition-all flex flex-col gap-2 bg-white p-8 max-lg:p-4">
                    <>
                      <div>
                        <Image
                          width={240}
                          height={240}
                          src={user.picture.large}
                          alt={`${user.name.first} ${user.name.last}`}
                          className="rounded-full mb-5 w-24 h-24 max-lg:w-20 max-lg:h-20"
                        />
                        <h1 className="font-medium">
                          {user.name.title} {user.name.first} {user.name.last}
                        </h1>
                        <h2 className="font-thin text-sm">
                          {user.gender === "female" ? "mulher" : "homem"} -{" "}
                          {user.dob.age} anos
                        </h2>
                      </div>
                      <hr />
                      <div className="flex flex-col gap-1 text-xs">
                        <p className="font-thin">Tel: {user.phone}</p>
                        <p className="font-thin">Email: {user.email}</p>
                        <p className="font-thin">
                          Endereço:{" "}
                          <span>
                            Rua {user.location.street.name},{" "}
                            {user.location.street.number} - {user.location.city}
                            , {user.location.state} - {user.location.country},{" "}
                            {user.location.postcode}
                          </span>{" "}
                        </p>
                      </div>
                    </>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
