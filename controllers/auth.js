const mysql = require("mysql"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const db = require("../db");


//ADMIN PART

exports.AdminSignup = (req, res) => {
  console.log(req.body);

  const {username, name, email, nidNumber, password, passwordConfirm} = req.body;


  db.query("SELECT Username FROM ADMIN WHERE Username = ?", [username], async (error, results) => {
      console.log(results)

      if(error) {
          console.log(error);
      }
      if(results.length > 0) {
          return res.status(400).send('That Username is already taken :(');

      } else if(password !== passwordConfirm) {
          return res.status(400).send('Password does not match');
      }

      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);

      db.query("INSERT INTO admin SET ?", {NID: nidNumber, Username: username, Password: hashedPassword, Email: email, Name: name}, (error, results) => {
          if(error){
              console.log(error);
          } else {
              console.log(results);
              return res.status(400).send('User Registered');
          }
      })

  });

}


exports.AdminLogin = (req, res) => {
  const { username, password } = req.body;

  // Sanitize and escape inputs to prevent SQL injection
  const sanitizedUsername = db.escape(username);

  // Query the database
  const query = `SELECT * FROM admin WHERE username = ${sanitizedUsername}`;
  db.query(query, async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Internal server error');
    }

    // Check if a user with the provided username exists
    if (results.length === 0) {
      return res.status(200).send('User not found tho the server ran');
    }

    const user = results[0]; 


    // Compare password with the stored hash (you need to hash the password during registration)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    let token
    if (isPasswordValid) {
      // Authentication part
      token = jwt.sign({ name: user.username }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '24h'
      });
      db.query('UPDATE admin SET token = ? WHERE username = ?', [token, user.username], (updateErr) => {
        if (updateErr) {
          console.error('Token update error:', updateErr);
          return res.status(500).send('Token update error');
        }

        res.redirect("/AdminHomepage")
      });

    } else {
      return res.status(400).send('Invalid password');
    }
    

    // const query = 'SELECT * FROM users where token = ?', [token];
    db.query('SELECT * FROM users where token = ?', [token], (err, results) => {
      if (err) {
        console.error('User data can not be found:', err);

      }
      else {
        db.query('SELECT * FROM users where token = ?', [token], (err, results) => {
          if(err) throw new Error()

          console.log(results)
        })
      }
    })

  });  
  
};

exports.AddConcerts = (req, res) => {
  console.log(req.body);

  const {id, name, date, description, venueid, type} = req.body;


  db.query("SELECT id FROM concert WHERE id = ?", [id], async (error, results) => {
      console.log(results)

      if(error) {
          console.log(error);
      }
      if(results.length > 0) {
          return res.status(400).send('This concert is already registered! :(');

      } 

      db.query("INSERT INTO concert SET ?", {ID: id, Name: name, Date: date, Description: description, Type: type, Venue: venueid}, (error, results) => {
          if(error){
              console.log(error);
          } else {
              console.log(results);
              return res.status(400).send('Concert Registered');
          }
      })

  });

}

exports.RemoveConcerts = (req, res) => {
  console.log(req.body);

  const {id, name} = req.body;
  db.query("DELETE FROM concert WHERE id = ?", [id], (error, results) => {
    if(error){
        console.log(error);
    } else {
        console.log(results);
        return res.status(400).send('Concert Deleted');
    }
})

      } 

exports.newband = (req,res) => {
    console.log(req.body);

    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;

    db.query('SELECT email FROM bands WHERE email = ?', [email], (error,results ) => {
        if (error) {
            console.log(error);
        }
        if (results.lenght >0) {
            return res.render('newband',{
                message: "Band already Added"
            });
        } 
        db.query('INSERT INTO bands SET?', {BandName: name , Email: email , Number: mobile }, (error,results) => {
            if (error) {
                console.log(error)
            }
        } )
    })

    res.send("New Band Added");
}

exports.AdminAddBands = (req,res) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const genre = req.body.genre;
  const members = req.body.members;
  const songs = req.body.songs;

  db.query('SELECT email FROM bands WHERE email = ?', [email], (error,results) => {
      if (error) {
          console.log(error);
      }
      if (results.lenght >0) {
          return res.render('AdminAddBands',{
              message: "Band already Added"
          });
      } 
      db.query('INSERT INTO bands SET?', {BandName: name , Email: email , Number: mobile, genre: genre, members: members, Songs: songs}, (error,results) => {
          if (error) {
              console.log(error)
          }
      } )
  })

  res.send("New Band Added");
}

exports.RemoveBands = (req, res) => {
  console.log(req.body);

  const {name, email} = req.body;
  db.query("DELETE FROM bands WHERE BandName = ?", [name], (error, results) => {
    if(error){
        console.log(error);
    } else {
        console.log(results);
        return res.status(400).send('Concert Deleted');
    }
})

      } 
//ADMIN PART


exports.SignupStructure = (req, res) => {
  console.log(req.body);

  const {username, name, email, nidNumber, phoneNumber, password, passwordConfirm} = req.body;


  db.query("SELECT Username FROM users WHERE Username = ?", [username], async (error, results) => {
      console.log(results)

      if(error) {
          console.log(error);
      }
      if(results.length > 0) {
          return res.status(400).send('That Username is already taken :(');

      } else if(password !== passwordConfirm) {
          return res.status(400).send('Password does not match');
      }

      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);

      db.query("INSERT INTO users SET ?", {NID: nidNumber, Number: phoneNumber, Username: username, Password: hashedPassword, Email: email, Name: name}, (error, results) => {
          if(error){
              console.log(error);
          } else {
              console.log(results);
              return res.status(400).send('User Registered');
          }
      })

  });

}

exports.LoginStructure = (req, res) => {
    const { username, password } = req.body;
  
    // Sanitize and escape inputs to prevent SQL injection
    const sanitizedUsername = db.escape(username);
  
    // Query the database
    const query = `SELECT * FROM users WHERE username = ${sanitizedUsername}`;
    db.query(query, async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Internal server error');
      }
  
      // Check if a user with the provided username exists
      if (results.length === 0) {
        return res.status(200).send('User not found tho the server ran');
      }
  
      const user = results[0]; 

  
      // Compare password with the stored hash (you need to hash the password during registration)
      const isPasswordValid = await bcrypt.compare(password, user.Password);
      let token
      if (isPasswordValid) {
        // Authentication part
        token = jwt.sign({ name: user.Username }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '24h'
        });
        db.query('UPDATE users SET token = ? WHERE username = ?', [token, user.Username], (updateErr) => {
          if (updateErr) {
            console.error('Token update error:', updateErr);
            return res.status(500).send('Token update error');
          }
  
          res.redirect("/HomePage")
        });

      } else {
        return res.status(400).send('Invalid password');
      }
      
      //Rohan's work
      // const query = 'SELECT * FROM users where token = ?', [token];
      db.query('SELECT * FROM users where token = ?', [token], (err, results) => {
        if (err) {
          console.error('User data can not be found:', err);

        }
        else console.log(results)
      })

    });  
    
};

exports.GetUserData = (req, res) => {
  const { username, password } = req.body;

  // Sanitize and escape inputs to prevent SQL injection
  const sanitizedUsername = db.escape(username);

  // Query the database
  const query = `SELECT * FROM users WHERE username = ${sanitizedUsername}`;
  db.query(query, async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Internal server error');
    }

    // Check if a user with the provided username exists
    if (results.length === 0) {
      return res.status(200).send('User not found tho the server ran');
    }

    const user = results[0]; 


    // Compare password with the stored hash (you need to hash the password during registration)
    const isPasswordValid = await bcrypt.compare(password, user.Password);
    let token
    if (isPasswordValid) {
      // Authentication part
      token = jwt.sign({ name: user.Username }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '24h'
      });
      db.query('UPDATE users SET token = ? WHERE username = ?', [token, user.Username], (updateErr) => {
        if (updateErr) {
          console.error('Token update error:', updateErr);
          return res.status(500).send('Token update error');
        }
      });

    } else {
      return res.status(400).send('Invalid password');
    }
    
    //Rohan's work
    // const query = 'SELECT * FROM users where token = ?', [token];
    db.query('SELECT * FROM users where token = ?', [token], (err, results) => {
      if (err) {
        console.error('User data can not be found:', err);

      }
      else {
        db.query('SELECT * FROM users where token = ?', [token], (err, results) => {
          if(err) throw new Error()

          res.send(results)
        })
      }
    })
  });  
};

exports.AuthorizeUser = (req, res) => {
  const token = req.body.token

  db.query('SELECT * FROM users where token = ?', [token], (err, result) => {
    if(err) throw new Error()

    if(result[0].token === token) {
      db.query('SELECT TicketID FROM tickets WHERE UserUsername = ?', [result[0].Username], (err, newResult) => {
        if(err) throw new Error()

        console.log(newResult)
        
        if(newResult.length <= 0) {
            res.status(200).json({
              userData: result[0],
              ticketId: "No tickets purchased."
          })
        }

        else {
          res.status(200).json({
            userData: result[0],
            ticketId: newResult
          })
        }

      })
      
    }
  })
}

exports.LoginAdmin = (req, res) => {
  const token = req.body.token

  db.query('SELECT * FROM admin where token = ?', [token], (err, result) => {
    if(err) throw new Error()

    if(result[0].token === token) res.status(200).send(result)
  })
}

exports.BuyTickets = (req, res) => {
  console.log(req.body);

  const { name, type, price, concertid, ticketid, token } = req.body;

  db.query(
      "SELECT Username FROM users WHERE token = ?",
      [token],
      async (error, results) => {
          if (error) {
              console.log(error);
              return res.status(500).send("Internal Server Error");
          }
          if (results.length > 0 && results[0].Username === name) {
              db.query(
                  "INSERT INTO tickets SET ?",
                  {
                      UserUsername: name,
                      Type: type,
                      Price: price,
                      ConcertID: concertid,
                      TicketID: ticketid,
                  },
                  (error, results) => {
                      if (error) {
                          console.log(error);
                          return res.status(500).send("Internal Server Error");
                      } else {
                          return res.status(200).send("Ticket Purchased");
                      }
                  }
              );
          } else {
              console.log(req.body);
              return res.status(400).send("You are not authorized to buy tickets for this user");
          }
      }
  );
};