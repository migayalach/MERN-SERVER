"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
// Define the first Route APP
app.get("/", (request, response) => {
    // Send Hello word
    response.send("Holis");
});
// Execute APP and Listen Request to PORT
app.listen(PORT, () => {
    console.log("Express server running at line");
});
//# sourceMappingURL=index.js.map