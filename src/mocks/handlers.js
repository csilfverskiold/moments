import { rest } from "msw";

const baseURL = "https://drf-api-cs.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 5,
        username: "Testduck",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 5,
        profile_image:
          "https://res.cloudinary.com/dgvnrwkpg/image/upload/v1/media/images/pexels-geometric-photography-15029327_v1aags",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
