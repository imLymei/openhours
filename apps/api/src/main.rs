use rocket::serde::json::Json;

#[macro_use]
extern crate rocket;

#[derive(rocket::serde::Serialize)]
#[serde(crate = "rocket::serde")]
struct Response {
    pub message: String,
    pub error: Option<u32>,
}

#[get("/")]
fn index() -> Json<Response> {
    Json(Response {
        message: String::from("Hello world!"),
        error: None,
    })
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
