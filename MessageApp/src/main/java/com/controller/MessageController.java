package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Message;
import com.service.MessageService;

@RestController
@CrossOrigin(origins="*")
public class MessageController {

	@Autowired
	MessageService messageService;
	
	@GetMapping("/messages")
	public ResponseEntity<?> getAllMessages(){
		return new ResponseEntity<>(messageService.getAllMessages(),HttpStatus.OK);
	}
	
	@PostMapping("/addmessage")
	public ResponseEntity<?> addMessage(@RequestBody Message m){
		messageService.addMessage(m);
		return new ResponseEntity<>("Message added",HttpStatus.CREATED);
	}
	
	@PatchMapping("/updatemessage")
	public ResponseEntity<?> updateMessage(@RequestBody Message m){
		messageService.updateMessage(m);
		return new ResponseEntity<>("Message Updated",HttpStatus.ACCEPTED);
	}
}
