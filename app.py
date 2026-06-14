import streamlit as st
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# 1. Page layout configuration
st.set_page_config(page_title="Movie Review Analyzer", layout="centered")
st.title("🎬 Movie Review Analyzer")
st.markdown("### Not just sentiment → also show **why** 👈")

# 2. Advanced Training with Bigrams (N-grams)
@st.cache_resource
def load_data_and_train():
    df = pd.read_csv('IMDB-Dataset.csv')
    df['sentiment'] = df['sentiment'].str.lower()
    
    # Perfect class balancing
    pos_df = df[df['sentiment'] == 'positive']
    neg_df = df[df['sentiment'] == 'negative']
    balanced_df = pd.concat([
        pos_df.sample(5000, random_state=42),
        neg_df.sample(5000, random_state=42)
    ]).sample(frac=1, random_state=42)
    
    # FIX: Use ngram_range=(1,2) to capture word combinations like "not good"
    vec = TfidfVectorizer(ngram_range=(1, 2), max_features=5000, max_df=0.8)
    X = vec.fit_transform(balanced_df['review'])
    
    clf = LogisticRegression(random_state=42).fit(X, balanced_df['sentiment'])
    
    return vec, clf

vectorizer, model = load_data_and_train()

# 3. User Interface
user_review = st.text_area("Enter your movie review here:", placeholder="e.g., The movie was not good...")

if st.button("Analyze Sentiment"):
    if user_review:
        # Prediction
        review_vector = vectorizer.transform([user_review])
        prediction = model.predict(review_vector)[0]
        
        # Enhanced keyword/phrase matching for Bigrams
        user_clean = user_review.lower()
        feature_names = vectorizer.get_feature_names_out()
        keywords = [w for w in feature_names if w in user_clean and len(w.split()) <= 2]
        
        # Filter down to the most impactful unique matched phrases
        matched_reasons = []
        for kw in sorted(keywords, key=len, reverse=True):
            if not any(kw in dynamic_k for dynamic_k in matched_reasons if kw != dynamic_k):
                matched_reasons.append(kw)
        
        color = "green" if prediction == "positive" else "red"
        
        st.subheader(f"Sentiment: :{color}[{prediction.capitalize()}]")
        st.write(f"💡 **Reasons:** Found keywords/phrases: *{', '.join(matched_reasons[:5])}*")
    else:
        st.warning("Please enter a review first!")