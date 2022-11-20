import { body } from "express-validator";

export const productCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 5 })
      .withMessage("O produto precisa ter no mínimo 5 caracteres."),
    body("quantity")
      .isNumeric()
      .withMessage("A quantidade precisa ser um número.")
      .custom((value: number) => {
        if (value < 0 || value > 1000000) {
          throw new Error("A quantidade precisa ser de 0 a 1000000.");
        }
        return true;
      }),
    body("description").isString().withMessage("A descrição é obrigatória."),
    body("owner").isString().withMessage("O nome do proprietário é obrigatório."),
  ];
};