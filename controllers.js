const express = require('express');

 req.body ; let users =  [
    {username:"alice",age=25,email:"alice@example.com"},
    {username:"bob",age=30,email:"bob@example.com"},
    {username:"Charlie",age=28,email:"Charlie@example.com"},
 ]
         
        //  GET all 
         app.get('/get', (req, res) => { if (users.length === 0)
             { return res.status(404).json({ message: "data not found" });
             }
              return res.status(200).json({ message: "fetched successfully", inventory }); });
         
        //   GET by ID
           app.get('/get/:id', (req, res) =>
             { const id = parseInt(req.params.id);
                 const data = inventory.filter(item => item.id === id);
                 
                 if (data.length === 0)
                     { return res.status(404).json({ message: "data not found" }); }
                  return res.status(200).json({ message: "data fetched successfully", data }); 
                });
                
                
                // POST
             app.post('/post', (req, res) =>
                 { const { name, age, email,  category } = req.body;
             
             if (!name || age === undefined || email === undefined || !category) 
                { return res.status(400).json({ message: "Missing required fields" }); 
            } const newItem = { id: inventory.length + 1, ...req.body };
             inventory.push(newItem);
              return res.status(201).json({ message: "Product created successfully", data: newItem });
             });
             
             // DELETE 
            
             app.delete('/delete/:id', (req, res) =>
                 { const id = parseInt(req.params.id);
                     const initialLen = inventory.length; inventory = inventory.filter(item => item.id !== id);
                      if (initialLen === inventory.length) {
                         return res.status(404).json({ message: "Element not found" }); 
                        }
                         return res.status(200).json({ message: "Data deleted successfully", inventory });
                         });
                         
                         
                         // PUT
                          app.put('/put/:id', (req, res) =>
                             { const id = parseInt(req.params.id);
                                
                                let updated = false; 
                                users = users.map(item =>
                                     { if (item.id === id) { updated = true; return { ...item, ...req.body };
                                     }
                                      return item; });
                                       if (!updated) { 
                                        return res.status(404).json({ message: "Data not found" });
                                     }
                                      return res.status(200).json({ message: "Data updated successfully", inventory });
                                     });