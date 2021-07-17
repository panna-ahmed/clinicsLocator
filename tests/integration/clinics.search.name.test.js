const request = require("supertest");

let server;

describe("/api/clinics", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  afterEach(() => {
    server.close();
  });

  describe("GET /", () => {
    it("should return 404", async () => {
      const res = await request(server).get("/api/clinics1");
      expect(res.status).toBe(404);
    });

    it("should return all clinics", async () => {
      const res = await request(server).get("/api/clinics");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(5);
    });
  });

  describe("GET ?name=:name", () => {
    it("should return two clinics", async () => {
      const res = await request(server).get("/api/clinics?name=good");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
    });

    it("should return 0 clinics", async () => {
      const res = await request(server).get("/api/clinics?name=xxxx");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(0);
    });
  });
});
