package com.model;

public class Message {
	private int messageId;
    private String sender;
    private String receiver;
    private String messageText;
    
    public Message() {}
    
	@Override
	public String toString() {
		return "Message [messageId=" + messageId + ", sender=" + sender + ", receiver=" + receiver + ", messageText="
				+ messageText + "]";
	}
	public int getMessageId() {
		return messageId;
	}
	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getReceiver() {
		return receiver;
	}
	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}
	public String getMessageText() {
		return messageText;
	}
	public void setMessageText(String messageText) {
		this.messageText = messageText;
	}
	public Message(int messageId, String sender, String receiver, String messageText) {
		super();
		this.messageId = messageId;
		this.sender = sender;
		this.receiver = receiver;
		this.messageText = messageText;
	}
}
