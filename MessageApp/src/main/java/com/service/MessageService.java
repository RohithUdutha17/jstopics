package com.service;

import org.springframework.stereotype.Service;
import java.util.*;
import com.model.*;
@Service
public class MessageService {

	ArrayList<Message> list = new ArrayList<>();
	
	public void addMessage(Message m) {
		list.add(m);
	}
	
	public ArrayList<Message> getAllMessages() {
		return list;
	}
	
	public void updateMessage(Message m) {
		Iterator<Message> it = list.listIterator();
		
		while(it.hasNext()) {
			Message message = it.next();
			if(message.getMessageId() == m.getMessageId()) {
				it.remove();
				break;
			}
		}
		list.add(m);
	}
}
