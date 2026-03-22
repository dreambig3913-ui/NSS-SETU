// =====================
// FRONTEND (Flutter - main.dart)
// =====================
import 'package:flutter/material.dart';

void main() {
  runApp(NSSSetuApp());
}

class NSSSetuApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NSS SETU',
      home: LoginPage(),
    );
  }
}

class LoginPage extends StatelessWidget {
  final TextEditingController email = TextEditingController();
  final TextEditingController password = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Login')),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(controller: email, decoration: InputDecoration(labelText: 'Email')),
            TextField(controller: password, decoration: InputDecoration(labelText: 'Password')),
            ElevatedButton(
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (_) => Dashboard()));
              },
              child: Text('Login'),
            )
          ],
        ),
      ),
    );
  }
}

class Dashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Dashboard')),
      body: Column(
        children: [
          Text('Upcoming Events'),
          ListTile(title: Text('Cleanliness Drive')),
          ListTile(title: Text('Blood Donation Camp')),
        ],
      ),
    );
  }
}

// =====================
// BACKEND (Django - models.py)
// =====================
from django.db import models

class Volunteer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    hours_completed = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title

// =====================
// BACKEND (views.py)
// =====================
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event

@api_view(['GET'])
def get_events(request):
    events = Event.objects.all()
    data = [{"title": e.title, "date": e.date} for e in events]
    return Response(data)

// =====================
// BACKEND (urls.py)
// =====================
from django.urls import path
from .views import get_events

urlpatterns = [
    path('events/', get_events),
]

// =====================
// README (for GitHub)
// =====================
# NSS SETU

This is a partial implementation of NSS SETU.

## Features Implemented
- Login UI
- Dashboard UI
- Event Listing API
- Basic Database Models

## Tech Stack
- Flutter (Frontend)
- Django + DRF (Backend)

## How to Run
1. Run Django Server
2. Run Flutter App

---

(Approx 30% implementation completed)
