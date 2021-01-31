import Router from "next/router";

export const openModal = () =>
  Router.push({ pathname: "/", query: { modal: true } });

export const closeModal = () =>
  Router.push({ pathname: "/"});
