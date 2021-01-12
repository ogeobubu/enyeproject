import "./User.css";
import { Card, Button, CardGroup, Row, Spinner } from "react-bootstrap";
import moment from "moment";

const User = ({ users }) => {
  return (
    <Row className="m-3" xs={1} md={3} lg={4}>
      {users.length ? (
        users.map((user) => {
          return (
            <Card className="m-3 card">
              <CardGroup>
                <Card.Body className="card-body">
                  <div className="pic-side">
                    <img
                      src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                      className="rounded float-left"
                      alt="user"
                    />
                    <Card.Text style={{ color: "#000000" }}>
                      <small>
                        <p className="ml-4">
                          Last Seen:{" "}
                          <i
                            style={{ color: "red" }}
                            className="fa fa-circle"
                          ></i>{" "}
                          {moment(user.LastLogin).fromNow()}
                        </p>
                        <p className="ml-4">📱: {user.PhoneNumber}</p>
                      </small>
                    </Card.Text>
                  </div>
                  <div className="info-side">
                    <Card.Text style={{ color: "#000000" }}>
                      <div>
                        <small>Full Name 😊:</small>{" "}
                        <strong>
                          {user.FirstName} {user.LastName}
                        </strong>
                      </div>
                    </Card.Text>
                    <Card.Text style={{ color: "#000000" }}>
                      <small>
                        <p>
                          Gender:{" "}
                          {user.Gender === "Male"
                            ? "🧑 Male"
                            : user.Gender === "Female"
                            ? "👩 Female"
                            : "Private"}
                        </p>
                      </small>
                    </Card.Text>
                    <Card.Text style={{ color: "#000000" }}>
                      <small>
                        <p>
                          Payment Method 💵: {user.PaymentMethod.toUpperCase()}
                        </p>
                      </small>
                    </Card.Text>
                    <Card.Text style={{ color: "#000000" }}>
                      <small>
                        <p>Credit Card Type 💳: {user.CreditCardType}</p>
                      </small>
                    </Card.Text>
                  </div>
                  <Button
                    variant="warning"
                    onClick={() => {
                      alert(
                        `${user.FirstName}'s Location Cannot Be Currently Fetch From Google Map API. Please Try Again Later!`
                      );
                    }}
                  >
                    Get Location
                  </Button>
                </Card.Body>
              </CardGroup>
            </Card>
          );
        })
      ) : (
        <Spinner
          style={{ width: "100px" }}
          animation="border"
          variant="secondary"
        />
      )}
    </Row>
  );
};

export default User;
