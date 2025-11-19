# Ivory Castle - Version 1.4 Changelog

## 🔄 Major Change: Counter Service Replacement

### What Happened
CountAPI.xyz (the original counter service) is **no longer operational**:
- SSL certificate expired August 2024
- Service has been unreliable/down since mid-2023
- Multiple user reports confirm it's effectively shut down

### The Fix
Replaced with a **working alternative**: https://countapi.mileshilliard.com

### Technical Details

**Old Service (DEAD):**
- URL: `https://api.countapi.xyz`
- Key: `ivorycastle/games_played`
- Status: ❌ Down/Defunct

**New Service (WORKING):**
- URL: `https://countapi.mileshilliard.com/api/v1`
- Key: `ivorycastle_games`
- Status: ✅ Active and maintained
- Provider: Miles Hilliard (CountAPI community replacement)

### Features Preserved
✅ Global counter shared across all users
✅ Works on desktop and mobile
✅ Works in incognito/private mode
✅ No authentication required
✅ Free forever
✅ Persistent storage
✅ Same API pattern (get/hit/set)

### Testing
Use the included `counter_test.html` to verify the counter works:
1. Upload counter_test.html to your server
2. Open it in a browser
3. Click "Test GET" to check current value
4. Click "Test HIT" to increment
5. Verify it works across devices/browsers

### Migration Notes
- **No action required from users** - counter automatically uses new service
- Old counter.php file can be deleted (no longer needed)
- Counter starts fresh from 0 (old countapi.xyz data is inaccessible)
- First game played will initialize the global counter

---

## Version History Summary

### v1.4 (Current)
- ✅ Switched to working counter service (countapi.mileshilliard.com)
- ✅ Fixed counter reliability issues
- ✅ Updated diagnostic test page

### v1.3
- Current player box colored with player color
- Improved counter error handling
- Better console logging

### v1.2
- Rules link moved to footer with counter
- Rules modal improvements (ESC key support)

### v1.1
- Initial counter implementation (now replaced)

### v1.0
- Initial release
